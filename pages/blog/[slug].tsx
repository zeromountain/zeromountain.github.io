import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";

interface BlogPostProps {
  content: string;
  frontmatter: {
    title: string;
    author: string;
    date: string;
  };
}

const BlogPost: NextPage<BlogPostProps> = ({ frontmatter, content }) => {
  return (
    <Layout pageTitle={frontmatter.title}>
      <div>
        <h1>{frontmatter.title}</h1>
        <h3>
          By {frontmatter.author} - {frontmatter.date}
        </h3>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("./posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const slug = params?.slug;
  const md = fs.readFileSync(path.join("./posts", `${slug}.md`)).toString();
  const { data, content } = matter(md);
  const date = data.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return {
    props: {
      frontmatter: {
        title: data.title,
        author: data.author,
        date,
      },
      content,
    },
  };
};

export default BlogPost;
