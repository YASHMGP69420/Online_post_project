import React, { useState, useEffect, useRef, useCallback } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SORT_TABS = [
  { id: 'hot', label: 'Hot', icon: 'local_fire_department' },
  { id: 'new', label: 'New', icon: 'new_releases' },
  { id: 'top', label: 'Top', icon: 'trending_up' },
]

// Community color palette for badges
const COMMUNITY_COLORS = [
  '#e65100', '#1565c0', '#2e7d32', '#6a1b9a', '#c62828',
  '#00838f', '#ef6c00', '#4527a0', '#ad1457', '#00695c',
]

function getCommunityColor(index) {
  return COMMUNITY_COLORS[index % COMMUNITY_COLORS.length]
}

function getTimeAgo(date) {
  if (!date) return ''
  const now = new Date()
  const created = new Date(date)
  const diffMs = now - created
  const diffMins = Math.floor(diffMs / 60000)
  if (diffMins < 1) return 'just now'
  if (diffMins < 60) return `${diffMins}m`
  const diffHrs = Math.floor(diffMins / 60)
  if (diffHrs < 24) return `${diffHrs}h`
  const diffDays = Math.floor(diffHrs / 24)
  return `${diffDays}d`
}

function PostCard({ post, index, onImageClick }) {
  const [vote, setVote] = useState(null) // null, 'up', 'down'
  const [isPressed, setIsPressed] = useState(false)
  const initialVotes = useRef(Math.floor(Math.random() * 900 + 100)).current
  const initialComments = useRef(Math.floor(Math.random() * 200 + 5)).current
  const communityColor = getCommunityColor(index)
  const communityLetter = 'A'
  const communityName = 'Anonymous'
  const timeAgo = getTimeAgo(post.createdAt) || `${(index + 1) * 2}h`

  const handleVote = (type) => {
    setVote(prev => prev === type ? null : type)
  }

  return (
    <article
      className="post-card animate-fade-in-up"
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      style={{
        transform: isPressed ? 'scale(0.995)' : 'scale(1)',
      }}
    >
      {/* Header */}
      <div className="post-card__header">
        <div className="post-card__meta">
          <div
            className="post-card__community-icon"
            style={{ backgroundColor: communityColor }}
          >
            {communityLetter}
          </div>
          <span className="post-card__community-name">{communityName}</span>
          <span className="post-card__timestamp">• {timeAgo}</span>
        </div>
        <button className="post-card__more-btn">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </div>

      {/* Title / Caption */}
      {post.caption && (
        <h2 className="post-card__title">{post.caption}</h2>
      )}

      {/* Image */}
      {post.image && (
        <div 
          className="post-card__image-wrapper"
          onClick={() => onImageClick && onImageClick(post.image)}
          style={{ cursor: 'pointer' }}
        >
          <img
            className="post-card__image"
            src={post.image}
            alt={post.caption || 'Post image'}
            loading="lazy"
          />
        </div>
      )}

      {/* Footer / Actions */}
      <div className="post-card__footer">
        {/* Vote Controller */}
        <div className="vote-controller">
          <button
            className={`vote-controller__btn ${vote === 'up' ? 'vote-controller__btn--active' : ''}`}
            onClick={() => handleVote('up')}
            aria-label="Upvote"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
              arrow_upward
            </span>
          </button>
          <span className={`vote-controller__count ${vote === 'up' ? 'vote-controller__count--active' : ''}`}>
            {initialVotes + (vote === 'up' ? 1 : vote === 'down' ? -1 : 0)}
          </span>
          <button
            className={`vote-controller__btn ${vote === 'down' ? 'vote-controller__btn--active' : ''}`}
            onClick={() => handleVote('down')}
            aria-label="Downvote"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
              arrow_downward
            </span>
          </button>
        </div>

        {/* Comment Button */}
        <button className="action-btn">
          <span className="material-symbols-outlined">chat_bubble_outline</span>
          <span>{initialComments}</span>
        </button>

        {/* Share Button */}
        <button className="action-btn">
          <span className="material-symbols-outlined">share</span>
          <span>Share</span>
        </button>
      </div>
    </article>
  )
}

const Feed = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeSort, setActiveSort] = useState('hot')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [fullscreenImage, setFullscreenImage] = useState(null)
  const voteCountsRef = useRef({})

  useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res.data.posts)
        // Generate stable random vote counts
        res.data.posts.forEach((post, i) => {
          if (!voteCountsRef.current[post._id]) {
            voteCountsRef.current[post._id] = Math.floor(Math.random() * 3000 + 100)
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  // Scroll to top FAB visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <section className="feed-container">
        {/* Sticky Header */}
        <div className="feed-header-sticky">
          {/* Page Title — kept as original */}
          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '28px',
            fontWeight: 800,
            color: 'var(--on-surface)',
            marginBottom: 'var(--space-sm)',
            letterSpacing: '-0.02em',
          }}>
            Feed
          </h1>

          {/* Sorting Tabs */}
          <div className="sort-tabs">
            {SORT_TABS.map(tab => (
              <button
                key={tab.id}
                className={`sort-tab ${activeSort === tab.id ? 'sort-tab--active' : ''}`}
                onClick={() => setActiveSort(tab.id)}
              >
                <span className="material-symbols-outlined">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Feed Content */}
        {loading ? (
          <div className="feed-loading">
            <div className="feed-loading__spinner" />
            <span className="feed-loading__text">Loading posts...</span>
          </div>
        ) : posts.length > 0 ? (
          <div className="feed-cards">
            {posts.map((post, index) => (
              <PostCard 
                key={post._id} 
                post={post} 
                index={index} 
                onImageClick={setFullscreenImage}
              />
            ))}
          </div>
        ) : (
          <div className="feed-empty">
            <span className="material-symbols-outlined feed-empty__icon">
              dynamic_feed
            </span>
            <h2 className="feed-empty__title">No posts yet</h2>
            <p className="feed-empty__text">
              Be the first to share something with the community.
            </p>
            <button
              className="feed-empty__cta"
              onClick={() => navigate('/create-post')}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>add</span>
              Create Post
            </button>
          </div>
        )}
      </section>

      {/* Scroll to Top FAB */}
      <button
        className={`scroll-top-fab ${showScrollTop ? 'scroll-top-fab--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <span className="material-symbols-outlined">expand_less</span>
      </button>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenImage(null)}>
          <button className="fullscreen-close" onClick={() => setFullscreenImage(null)}>
            <span className="material-symbols-outlined">close</span>
          </button>
          <img 
            src={fullscreenImage} 
            alt="Fullscreen" 
            className="fullscreen-image" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  )
}

export default Feed