export interface NavbarItemType {
  label: string
  href: string
}

export const navbarData: Array<NavbarItemType> = [
  {
    label: 'inicio',
    href: '/',
  },
  {
    label: 'cursos',
    href: '/cursos',
  },
  {
    label: 'livro digital',
    href: '/livros',
  },
]
