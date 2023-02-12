import { useSanityClient } from "astro-sanity";

export async function getAllPosts() {
    const client = useSanityClient()
    const query = `*[_type == "post"]`;
    const posts = await client.fetch(query)
    return posts
}

export async function getAllAuthors() {
    const client = useSanityClient()
    const query = `*[_type == "author"]`;
    const authors = await client.fetch(query)
    return authors
}