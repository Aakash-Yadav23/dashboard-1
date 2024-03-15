"use client"
import React from 'react'
import { Nav } from '../ui/nav'
import {
    AlertCircle,
    Archive,
    ArchiveX,
    File,
    Inbox,
    MessagesSquare,
    PenBox,
    Search,
    Send,
    ShoppingCart,
    Trash2,
    Users2,
  } from "lucide-react"
  
type Props = {}

export default function Sidebar({}: Props) {
  return (
    <div>
         <Nav
            isCollapsed={false}
            links={[
              {
                title: "Inbox",
                label: "128",
                icon: Inbox,
                variant: "default",
                href: "/inbox",
              },
              {
                title: "Drafts",
                label: "9",
                icon: File,
                variant: "ghost",
                href: "/drafts",
              },
              {
                title: "Sent",
                label: "",
                icon: Send,
                variant: "ghost",
                href: "/sent",
              },
              {
                title: "Junk",
                label: "23",
                icon: ArchiveX,
                variant: "ghost",
                href: "/junk",
              },
              {
                title: "Trash",
                label: "",
                icon: Trash2,
                variant: "ghost",
                href: "/trash",
              },
              {
                title: "Archive",
                label: "",
                icon: Archive,
                variant: "ghost",
                href: "/archive",
              },
            ]}
          />
    </div>
  )
}