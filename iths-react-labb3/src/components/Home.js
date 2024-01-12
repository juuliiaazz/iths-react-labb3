import React from "react";
import { HomeDiv, Paragraph, Title } from "../ui/Main";
import { Button } from "../ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <HomeDiv>
      <Title>Welcome to Baking Made Simple!</Title>
      <Paragraph>
        Explore our pastry creations and get inspired to create magic in your
        own kitchen.
      </Paragraph>
      <Link href={"/recipes"}>
        <Button type="home">
          <Paragraph>Browse through our recipes</Paragraph>
        </Button>
      </Link>
    </HomeDiv>
  );
}
