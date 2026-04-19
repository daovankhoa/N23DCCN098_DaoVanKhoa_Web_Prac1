import Link from "next/link";

async function getPost(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
  );

  return res.json();
}

export default async function BlogDetail({ params }) {
  const post = await getPost(params.id);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Container */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">

        {/* Title */}
        <h1 className="text-2xl font-bold text-indigo-600 mb-4">
          {post.title}
        </h1>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed mb-6">
          {post.body}
        </p>

        {/* Back button */}
        <Link
          href="/"
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          ← Back to Blog
        </Link>

      </div>

    </div>
  );
}