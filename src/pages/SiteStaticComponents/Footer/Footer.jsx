import s from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={`page-footer ${s.footerPosition} `}>
      <div class="footer-copyright">
        <div class="container">
        2021 With the support of RS Shool
        <img className={s.logoSchool}  src="https://rs.school/images/rs_school_js.svg"/>
        <a class="grey-text text-lighten-4 right" href="https://github.com/Andrei107Q">Creator</a>
        </div>
      </div>
    </footer>
  )
}