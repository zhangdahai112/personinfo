"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogOut } from "lucide-react"
import { useUser } from "@/contexts/UserContext"
import Link from "next/link"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useUser()

  const navItems = [
    { name: "首页", href: "/personinfo" },
    { name: "咨询服务", href: "/personinfo/consultation" },
    { name: "查询服务", href: "/personinfo/search" },
    { name: "隐私保护", href: "/personinfo/privacy" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 chinese-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">诸</span>
                </div>
                <div className="text-xl font-bold text-gray-900">
                  诸葛查查
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2 text-gray-700">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{user.name}</span>
                </div>
                <Link href="/dashboard">
                  <Button variant="chinese" className="rounded-full">
                    我的查询
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="rounded-full"
                >
                  <LogOut className="w-4 h-4 mr-1" />
                  退出
                </Button>
              </>
            ) : (
              <Link href="/auth">
                <Button variant="chinese" className="rounded-full">
                  登录/注册
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-red-100">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/questionnaire">
                  <Button variant="chinese" className="w-full rounded-full">
                    开始查询
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
