import Post from "../models/Post";
import User from '../models/User';
// GET POST
export const listAllPosts = async params => {
	const { offset } = params;

	try {
        const allPosts = await Post.findAll({
            limit: 20,
            offset: offset ? offset * 20 : 0,
            order: [["id", "DESC"]],
            attributes: ["id","title", "content","tags","description","createdAt","updatedAt"],
            required: true,
            include:[
                {
                    model:User,
                    attributes: ["username", "image"], //Lay username va avatar cua user tu model User
                    required:true,
                }
            ]
        });
		return allPosts;
	} catch (error) {
		throw error;
	}
};

// GET POST THEO USERNAME
export const listAllPostsUsername = async (params,username) => {
    const {offset} = params;
    const allPostsUsername = await Post.findAll({
        limit:100,
        offset: offset ? offset*100: 0, //if (offset) => offset*limit, else: 0
        where: {
            author: username
        },
        order: [["id","DESC"]]
    });
    try {
        return allPostsUsername;
    } catch (error) {
        throw error;
    }
}

// GET POST THEO ID
export const getPostById = async params => {
    const {id} = params;
    const postById = await Post.findOne({
        where: {
            id
        },
        required: true,
        include:[
            {
                model:User,
                attributes: ["username", "image"], //Lay username va avatar cua user tu model User
                required:true,
            }
        ]
    });
    try {
        return postById;
    } catch (error) {
        throw error;
    }
}


//CREATE POST
export const createPost = async params => {
  const { title, content, image, description, tags, author } = params;
  try {
    const newPost = await Post.create(
      {
        title,
        content,
        image,
        description,
        tags,
        author
      },
      {
        fields: ["title", "content", "image", "description", "tags", "author"]
      }
    );
    return newPost;
  } catch (error) {
    throw error;
  }
};

//UPDATE POST
export const updatePost = async (params,id) => {
    const {title, content, image, description, tags, author } = params;
    try {
        const editPost = await Post.update({
            title,
            content,
            image,
            description,
            tags,
            author
        },
    {
        where: {
            id
        }
    });
        return editPost
    } catch (error) {
        throw error;
    }
}

//DELETE POST
export const deletePost = async params => {
    const {id} = params;
    try {
        const destroyPost = await Post.destroy({
            where: {
                id
            }
        });
        return destroyPost
    } catch (error) {
        throw error
    }
} 