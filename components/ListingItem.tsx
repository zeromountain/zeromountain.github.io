import React from "react";
import ListingElement from "../styles/ListingElement";
import PostPreview from "../types/PostPreview";
import AppLink from "./AppLink";

interface ListingItemProps {
  post: PostPreview;
}

const ListingItem: React.FC<ListingItemProps> = ({ post }) => {
  return (
    <ListingElement>
      <AppLink href={`/blog/${post.slug}`} label={post.title} />
      {post.excerpt && <h1>{post.excerpt}</h1>}
    </ListingElement>
  );
};

export default ListingItem;
