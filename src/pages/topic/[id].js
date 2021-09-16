import Image from "next/image"
import Link from "next/link"
import { client } from "../../libs/client"

export default function Topic({ topic }) {
  return (
    <>
      <h1 className="text-xl font-semibold mb-4 border-b">{topic.title}</h1>
      <p className="mb-8">{topic.description}</p>
      {topic.ramens.map((ramen) => {
        const shop = ramen.shop
        return (
          <div className="mb-16" key={shop.id}>
            <h3 className="mb-4 font-semibold text-lg">{shop.name}</h3>
            <div className="">
              <Image
                src={`${shop.photo.url}?fit=crop&w=300&h=200`}
                width="300"
                height="200"
                layout="fixed"
                alt={shop.name}
                objectFit="cover" // change to suit your needs
                className="rounded" // just an example
              ></Image>
            </div>
            <p>{ramen.comment}</p>
          </div>
        )
      })}
    </>
  )
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "topic", queries: { depth: 1 } })

  const paths = data.contents.map((content) => `/topic/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await client.get({
    endpoint: "topic",
    contentId: id,
    queries: { depth: 2 },
  })

  return {
    props: {
      topic: data,
    },
  }
}
