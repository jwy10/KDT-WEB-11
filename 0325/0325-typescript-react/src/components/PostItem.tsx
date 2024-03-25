import { PostItemProps } from '../types';

// {todo} => {todo: {id, text, completed}}
interface Props {
  post: PostItemProps;
} // PostItem 컴포넌트입니다.

const PostItem = ({ post }: Props) => {
  return (
    <div className="PostItem">
      <div>
        <span className="id">No. {post.id}</span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body.slice(0, 120)}...</p>
    </div>
  );
};

export default PostItem;
