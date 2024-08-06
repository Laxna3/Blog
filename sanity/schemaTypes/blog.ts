export default{
    name:'blog',
    type:'document',
    title:"Blog",
    fields:[{
        name:'title',
        type:'string',
        title:'Title of Blog',
    },
    {
        name:'slug',
        type:'slug',
        title:'Slug of blog',
        options:{
            source:'title'
        }
    },
    {
        name:'titleImg',
        type:'image',
        title:'Title Image',
    },
    {
        name:'smallDesc',
        type:'text',
        title:'Description of Blog',
    },
    {
        name:'content',
        type:'array',
        title:'Content',
        of:[{
            type:'block',
    }]
    }

    ]}
