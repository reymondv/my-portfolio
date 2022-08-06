const Works = ({json}) => {
  return (
    <>
    {json.map((data, idx) => (
      <p key={idx}>{data.company}</p>
    ))}
    </>
  )
}

export default Works