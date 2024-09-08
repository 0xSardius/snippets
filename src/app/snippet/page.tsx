import Link from "next/link";

export default function SnippetPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <Link
        href="/"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800"
      >
        Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6">Create Snippet</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-2 font-medium">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="code" className="block mb-2 font-medium">
            Code:
          </label>
          <textarea
            id="code"
            name="code"
            rows={10}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Save
        </button>
      </form>
    </div>
  );
}
