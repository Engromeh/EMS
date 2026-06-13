
const TitelAuth = ({ title, paragraph }) => {
  return (
    <>
      <div className="mb-4">
          <h3 className="font-bold text-lg text-[#1B2B4B]">{title}</h3>
          <p className="text-gray-500 text-sm">
            {paragraph}
          </p>
        </div>
    </>
  )
}

export default TitelAuth
