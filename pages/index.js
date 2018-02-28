import Link from 'next/link'
import 'isomorphic-unfetch'

const Index = (props) => (
  <div>
      Hello World.
      <Link href='/about' as={process.env.BACKEND_URL + '/about'}><a>About</a></Link>
      <div>
          Next stars: {props.stars}
      </div>
  </div>
)

Index.getInitialProps = async ({ req }) => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    const stars = json.stargazers_count
    return { stars }
}

export default Index
