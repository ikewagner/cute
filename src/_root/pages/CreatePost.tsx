import PostForm from '@/components/forms/PostForm';
import { ImagePlus } from 'lucide-react';

const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          < ImagePlus />
          <h2 className="h3-bold md:h2-bold text-left w-full">Criar uma Postagem</h2>
        </div>
        <PostForm action="Criar" />
      </div>
    </div>
  );
};

export default CreatePost;