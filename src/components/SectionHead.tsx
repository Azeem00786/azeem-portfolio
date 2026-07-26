import { useReveal } from '../hooks'

type Props = { num: string; title: string; blurb?: string }

export default function SectionHead({ num, title, blurb }: Props) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div className="sec-head reveal" ref={ref}>
      <div className="sec-head__rail">
        <span className="sec-head__num">{num}</span>
        <span className="sec-head__rule" />
      </div>
      <h2 className="sec-head__title">{title}</h2>
      {blurb && <p className="sec-head__blurb">{blurb}</p>}
    </div>
  )
}
