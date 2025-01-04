import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType( {
    name : 'post',
    type : 'document',
    title : 'Post',
    fields : [
        defineField(
        {
            name : 'title',
            type : 'string',
            title : 'Post Title',
            description : 'Title of the Post',
            validation : Rule => Rule.required(),
        }),
        // slug field
        defineField({
            name : 'slug',
            type : 'slug',
            title : 'Slug',
            options : {
                source : 'title',
                maxLength : 96 
            },
            validation:Rule => Rule.required()
        }),
        //summary field
        defineField({
            name : 'summary',
            type : 'text',
            title : 'Summary',
            validation:Rule => Rule.required()
        }),
        //image field
        defineField({
            name : 'image',
            type : 'image',
            title : 'Image',
            validation:Rule => Rule.required()
        }),
        defineField({
            name : 'content',
            type : 'array',
            title : 'Content',
            of:[
                defineArrayMember({
                    type:'block'
                })
            ]
        }),
        defineField({
            name : 'author',
            type : 'reference',
            title : 'Author',
            to:[{
                type: 'author'
            }]
        })

    ]

})