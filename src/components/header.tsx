import { HeartPulse, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from './ui/button'

export function Header() {
  return (
    <div className="bg-primary px-8">
      <div className="flex h-20 items-center justify-between px-6 font-medium text-white">
        <Link to="/">
          <div className="flex items-center gap-3 text-lg">
            <HeartPulse className="size-8 text-red-500" />
            <span className="text-xl tracking-wider">SaúdeOnline</span>
          </div>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <span>
            Bem-vindo, <span className="text-xl">User!</span>
          </span>
          <Button
            title="Sair"
            className="-mr-2"
            size="icon"
            onClick={() => null}
          >
            <LogOut className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
