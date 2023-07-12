import Link from "next/link";

import CustomBtn from "@/components/CustomBtn";

const NotFoundPage = () => {
    return (
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
            <h3 className="font-bold text-3xl mb-4">This page is not found!</h3>
            <div className="m-0">
                <CustomBtn href="/">Go back</CustomBtn>
            </div>
        </div>
    );
};

export default NotFoundPage;
