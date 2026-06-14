import React, { useState, useRef, useCallback } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../ThemeContext'

const MAX_CAPTION_LENGTH = 300

const CreatePost = () => {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()
  const fileInputRef = useRef(null)

  const [caption, setCaption] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const canSubmit = caption.trim().length > 0 && !isSubmitting

  const handleFileSelect = useCallback((file) => {
    if (!file || !file.type.startsWith('image/')) return
    setImageFile(file)
    const reader = new FileReader()
    reader.onload = (e) => setImagePreview(e.target.result)
    reader.readAsDataURL(file)
  }, [])

  const handleFileInputChange = (e) => {
    const file = e.target.files?.[0]
    if (file) handleFileSelect(file)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFileSelect(file)
  }

  const removeImage = () => {
    setImageFile(null)
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = () => {
    if (!canSubmit) return

    setIsSubmitting(true)
    setError(null)

    const formData = new FormData()
    formData.append('caption', caption)
    if (imageFile) {
      formData.append('image', imageFile)
    }

    axios.post("http://localhost:3000/create-post", formData)
      .then(() => {
        navigate("/feed")
      })
      .catch((err) => {
        console.log(err)
        setError("Error creating post. Please try again.")
        setIsSubmitting(false)
      })
  }

  const handleClose = () => {
    if (caption.trim() || imageFile) {
      if (confirm('Discard your post?')) {
        navigate('/feed')
      }
    } else {
      navigate('/feed')
    }
  }

  return (
    <div className="app-layout">
      {/* Create Post Header — title kept as original */}
      <header className="create-header">
        <div className="create-header__left">
          <button
            className="create-header__close-btn"
            onClick={handleClose}
            aria-label="Cancel"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <h1 className="create-header__title">Create Post</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <span className="material-symbols-outlined">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button
            className={`create-header__submit-btn ${!canSubmit ? 'create-header__submit-btn--disabled' : ''}`}
            onClick={handleSubmit}
            disabled={!canSubmit}
          >
            {isSubmitting ? 'Posting...' : 'Post'}
          </button>
        </div>
      </header>

      {/* Create Body */}
      <div className="create-page">
        <div className="create-body">
          {/* Caption Input */}
          <div className="create-caption">
            <textarea
              className="create-caption__input"
              placeholder="An interesting title"
              value={caption}
              onChange={(e) => {
                if (e.target.value.length <= MAX_CAPTION_LENGTH) {
                  setCaption(e.target.value)
                }
              }}
              rows={3}
              autoFocus
            />
          </div>

          {/* Image Upload */}
          <div className="create-upload">
            {imagePreview ? (
              <div className="create-upload__preview animate-fade-in">
                <img src={imagePreview} alt="Upload preview" />
                <button
                  className="create-upload__remove-btn"
                  onClick={removeImage}
                  aria-label="Remove image"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>close</span>
                </button>
              </div>
            ) : (
              <div
                className={`create-upload__dropzone ${isDragging ? 'create-upload__dropzone--drag' : ''}`}
                onClick={() => fileInputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <span className="material-symbols-outlined create-upload__icon">
                  add_photo_alternate
                </span>
                <p className="create-upload__text">
                  Drag an image here or <strong>browse</strong>
                </p>
                <p className="create-upload__hint">
                  Supports JPG, PNG, GIF, WebP
                </p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="create-upload__file-input"
              onChange={handleFileInputChange}
            />
          </div>
        </div>

        {/* Attachment Toolbar */}
        <div className="create-toolbar">
          <div className="create-toolbar__actions">
            <button
              className="create-toolbar__btn"
              title="Add Image"
              onClick={() => fileInputRef.current?.click()}
            >
              <span className="material-symbols-outlined">image</span>
            </button>
            <button className="create-toolbar__btn" title="Formatting">
              <span className="material-symbols-outlined">format_bold</span>
            </button>
          </div>
          <span className="create-toolbar__counter">
            {caption.length}/{MAX_CAPTION_LENGTH}
          </span>
        </div>
      </div>

      {/* Error Toast */}
      {error && (
        <div className={`create-toast create-toast--error create-toast--visible`}>
          {error}
        </div>
      )}
    </div>
  )
}

export default CreatePost