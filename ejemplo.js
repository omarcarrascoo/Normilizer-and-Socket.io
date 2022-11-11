// Definimos un esquema de usuarios (autores y comentadores)
const authorSchema = new schema.Entity('authors')

// Definimos un esquema de comentadores
const commentSchema = new schema.Entity('comments')

// Definimos un esquema de artículos
const postSchema = new schema.Entity('posts', {
 author: authorSchema,
 comments: [ commentSchema ]
});

const normalizedBlogpost = normalize(blogpost, postSchema);
print(normalizedBlogpost)
// console.log(normalizedBlogpost)
// console.log(normalizedBlogpost.entities.posts)