'use client'

import { useEffect } from 'react'

export function NotificationComponent() {
  useEffect(() => {
    if ('Notification' in window) {
      Notification.requestPermission()
    }
  }, [])

  const scheduleNotification = (title: string, body: string, delay: number) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      setTimeout(() => {
        new Notification(title, { body })
      }, delay)
    }
  }

  return null
}