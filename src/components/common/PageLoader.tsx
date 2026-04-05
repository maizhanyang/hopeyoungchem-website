export function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-label="加载中">
      <span className="sr-only">加载中</span>
      <div className="page-loader-spinner" />
    </div>
  )
}
