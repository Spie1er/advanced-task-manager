import { Link } from "react-router-dom";
import JumpingSmile from "@/assets/illustrations/jumping-smile.svg?react";
import { Button } from "@/components/common/button";
import { ArrowLeft } from "lucide-react";
import { notFoundPageContainerStyles } from "./not-found.styles";

const NotFoundPage = () => {
  return (
    <div className={notFoundPageContainerStyles()}>
      {/* Illustration */}
      <JumpingSmile />
      {/* Heading */}
      <h1 className="mb-3 text-6xl font-extrabold text-[#FF847C]">404</h1>
      <p className="mb-2 text-xl">
        Oops! We couldn’t find the page you’re looking for.
      </p>
      <p className="mb-6 text-sm text-[#99B898]">
        It might have been moved, deleted, or never existed.
      </p>

      {/* Back Button */}
      <Link to="/">
        <Button text="Home" type="secondary" iconStart={<ArrowLeft />} />
      </Link>
    </div>
  );
};

export default NotFoundPage;
