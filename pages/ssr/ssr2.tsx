import { Card } from 'antd';
import { NextPage, GetServerSideProps } from 'next';

interface Props {
    data: [{ id: number; name: string; username: string; email: string }];
}
type SingleUserType = { id: number; name: string; username: string; email: string };

// COMPONENT  ==================================================================================================================================
const SSR2: NextPage<Props> = ({ data }) => {
    return (

        <div className="flex w-screen min-h-screen p-12 gap-8 flex-wrap items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
            {data.map((user: SingleUserType) => (
                <div key={user.id} className="w-72 h-48 flex flex-col items-center justify-center bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-700 hover:bg-gray-800 transform hover:scale-105 duration-500 hover:text-white">
                    <h2 className="text-xl font-semibold text-black group-hover:text-white">{user.name}</h2>
                    <p className="text-gray-600">{user.username}</p>
                    <h4 className="text-sm text-gray-500">{user.email.slice(0, 15)}</h4>
                </div>
            ))}
        </div>

    );
};

// GET SERVERS SIDE PROPS ==================================================================================================================================
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const req = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await req.json();

    return {
        props: { data },
    };
};

export default SSR2;