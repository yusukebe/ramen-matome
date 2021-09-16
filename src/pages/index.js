import Link from "next/link"
import { client } from "../libs/client"

export default function Index({ topics }) {
  return (
    <>
      <h1 className="text-xl font-semibold mb-8 border-b">一覧</h1>
      <div>
        <ul className="list-disc ml-6">
          {topics.map((topic) => (
            <li key={topic.id}>
              <Link href={`/topic/${topic.id}`}>
                <a>{topic.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "topic" })
  return {
    props: {
      topics: data.contents,
    },
  }
}
