import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import { Container } from "../../styles/Container";
import { Title } from "../../styles/TextElements";
interface BlogPostProps {
  content: string;
  excerpt?: string;
  frontmatter: {
    title: string;
    author: string;
    date: string;
  };
}

const BlogPost: NextPage<BlogPostProps> = ({
  frontmatter,
  excerpt,
  content,
}) => {
  return (
    <Layout pageTitle={frontmatter.title} description={excerpt}>
      <Container>
        <h3>
          By {frontmatter.author} - {frontmatter.date}
        </h3>
        <Title>{frontmatter.title}</Title>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Container>
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
  const { data, content, excerpt } = matter(md);
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
      excerpt,
      content,
    },
  };
};

export default BlogPost;
