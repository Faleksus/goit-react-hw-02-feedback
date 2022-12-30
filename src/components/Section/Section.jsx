import css from './Section.module.css';

export const Section = ({children, title}) => {
  return (
    <section className={css.sectionCounter}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
