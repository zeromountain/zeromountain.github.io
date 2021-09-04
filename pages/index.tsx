import { GetStaticProps, NextPage } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import PostPreview from "../types/PostPreview";
import PostListing from "../components/PostListing";
import Hero from "../components/Hero";
import MainSection from "../components/MainSection";

interface BlogProps {
  posts: PostPreview[];
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <Layout pageTitle="Blog">
      <Hero />
      <MainSection posts={posts} />
    </Layout>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync("./posts");
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const md = fs.readFileSync(path.join("posts", filename), "utf-8");
    // const md = fs.readFileSync(`./posts/${filename}`).toString();
    const { data, excerpt } = matter(md, {
      excerpt_separator: "\n\n",
    });
    return {
      slug,
      title: data.title,
      excerpt,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
