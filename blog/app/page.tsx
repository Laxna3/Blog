/* npm i @sanity/image-url to get the image */
import {client, urlFor} from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const revalidate=30;

async function getData(){
  const query=`
  *[_type=='blog'] | order(_createdAt asc){
  title,
    smallDesc,
    "currentSlug":slug.current,
    titleImg
}`;

const data=await client.fetch(query);
return data;
}
export default async function Home() {
  const data:simpleBlogCard[]=await getData();
  
  console.log(data);
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
    {data.map((post,idx)=>(
      <Card key={idx}>
       <Image 
       src={urlFor(post.titleImg).url()} 
       alt="img" 
       width={500} 
       height={500} 
       className="rounded-t-lg h-[200px] object-cover"/>
     
     
      <CardContent className="mt-5">
        <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
        <p className="line-clamp-3 text-xm mt-2 text-gray-600 dark:text-gray-300">{post.smallDesc}</p>
        <Button asChild className="w-full mt-7">
        <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
        </Button>
        </CardContent>
        </Card>
    ))}

   </div>
  );
}
