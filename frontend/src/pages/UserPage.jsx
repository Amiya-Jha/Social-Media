import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={12}
        replies={41}
        postImg="/post1.jpg"
        postTitle="How are you all"
      />
      <UserPost
        likes={51}
        replies={67}
        postImg="/post1.jpg"
        postTitle="Awesome"
      />
      <UserPost
        likes={72}
        replies={18}
        postImg="/post1.jpg"
        postTitle="Incredible"
      />
      <UserPost likes={12} replies={11} postTitle="First Post Alert" />
    </>
  );
};

export default UserPage;
