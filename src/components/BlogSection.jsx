import { useEffect, useMemo, useRef, useState } from 'react'
import BlogCard from './BlogCard'

const AUTO_PLAY_INTERVAL = 6000

const BlogSection = ({ posts = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [maxCardHeight, setMaxCardHeight] = useState(0)
  const measureRef = useRef(null)
  const totalPosts = posts.length

  // Ajusta dinamicamente os cards exibidos para o carrossel.
  const currentSlide = useMemo(() => {
    if (!totalPosts) return []
    if (totalPosts <= 2) return posts
    const nextIndex = (currentIndex + 1) % totalPosts
    return [posts[currentIndex], posts[nextIndex]]
  }, [currentIndex, posts, totalPosts])

  // Avança automaticamente o carrossel a cada intervalo configurado.
  useEffect(() => {
    if (totalPosts <= 1) return undefined
    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPosts)
    }, AUTO_PLAY_INTERVAL)

    return () => window.clearInterval(intervalId)
  }, [totalPosts])

  // Mantém a altura mínima dos cards consistente em todas as telas.
  useEffect(() => {
    const measureEl = measureRef.current
    if (!measureEl) return

    const calculateHeight = () => {
      const cards = measureEl.querySelectorAll('.blog-card')
      const heights = Array.from(cards).map((card) => card.getBoundingClientRect().height)
      setMaxCardHeight(heights.length ? Math.max(...heights) : 0)
    }

    let frame = requestAnimationFrame(calculateHeight)
    const resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(calculateHeight)
    })

    resizeObserver.observe(measureEl)
    Array.from(measureEl.children).forEach((child) => resizeObserver.observe(child))
    window.addEventListener('resize', calculateHeight)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('resize', calculateHeight)
    }
  }, [posts])

  // Botões de navegação manual do carrossel.
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPosts) % totalPosts)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPosts)
  }

  if (!totalPosts) {
    return null
  }

  return (
    <section id="blog" className="blog">
      <div className="blog__header">
        <h2>Blog</h2>
      </div>
      <div
        className={`blog__grid ${totalPosts > 2 ? 'is-carousel' : ''}`}
        style={{ minHeight: maxCardHeight || undefined }}
      >
        {currentSlide.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
      <div className="blog__measure" ref={measureRef}>
        {posts.map((post) => (
          <div key={`${post.id}-measure`} className="blog__measure-item">
            <BlogCard {...post} />
          </div>
        ))}
      </div>
      {totalPosts > 1 && (
        <div className="blog__indicators">
          {posts.map((post, index) => {
            const isActive =
              index === currentIndex ||
              (totalPosts > 1 &&
                index === (currentIndex + 1) % totalPosts &&
                totalPosts > 2)

            return (
              <button
                key={post.id}
                type="button"
                className={`blog__indicator ${isActive ? 'is-active' : ''}`}
                aria-label={`Ir para o post ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}

export default BlogSection
