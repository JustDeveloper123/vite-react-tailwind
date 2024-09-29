import { Link, useParams } from 'react-router-dom';
import { ROUTES } from '../constants/router-routes';
import Button from '../ui/Button';

const PostPage = () => {
  const { id } = useParams();

  return (
    <div className="flex h-full flex-col items-center justify-center px-4 py-7">
      <h1 className="title">PostPage #{id}</h1>
      <Link to={ROUTES.extractStaticPath(r => r.public.home)}>
        <Button className={'max-w-[200px]'}>Back to home</Button>
      </Link>
    </div>
  );
};

export default PostPage;
