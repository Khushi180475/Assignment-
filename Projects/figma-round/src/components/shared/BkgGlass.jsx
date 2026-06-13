export default function BkgGlass({ children, className = '', style, ...props }) {
  return (
    <div className={`bkg-glass ${className}`.trim()} style={style} {...props}>
      {children}
    </div>
  )
}
