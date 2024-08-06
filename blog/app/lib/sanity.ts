/* creating a sanity client in sanity.ts 
npm i next-sanity */


import{createClient} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client= createClient({
    apiVersion:'2023-05-03',
    dataset:'production',
    projectId:'9i1nm96v',
    useCdn:false,
});
const builder= imageUrlBuilder(client);

export function urlFor(source:any){
   
    return builder.image(source);
}

