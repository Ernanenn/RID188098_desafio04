// Cartão individual utilizado dentro do carrossel de artigos.
const BlogCard = ({ title, date, tags, excerpt }) => {
  return (
    <article className="blog-card">
      <h3>{title}</h3>
      <p className="blog-card__meta">
        <span>{date}</span>
        <span>{tags.join(', ')}</span>
      </p>
      <p>{excerpt}</p>
    </article>
  )
}

export default BlogCard

