export const Form = ({ onChange }: any) => {
  return (
    <form>
      <section>
        <h3>먹고 싶은 메뉴</h3>
        <ul>
          <li>
            <input
              type='text'
              name='first'
              onChange={onChange}
              placeholder='음식 메뉴를 입력해주세요.'
            />
            <button type='button'>아무거나</button>
          </li>
          <li>
            <input
              type='text'
              name='second'
              onChange={onChange}
              placeholder='음식 메뉴를 입력해주세요.'
            />
            <button type='button'>아무거나</button>
          </li>
          <li>
            <input
              type='text'
              name='third'
              onChange={onChange}
              placeholder='음식 메뉴를 입력해주세요.'
            />
            <button type='button'>아무거나</button>
          </li>
        </ul>
      </section>
      <section>
        <h3>먹기 싫은 메뉴</h3>
        <li>
          <input type='text' onChange={onChange} placeholder='싫은 음식 메뉴를 입력해주세요.' />
          <button type='button'>없음</button>
        </li>
      </section>
      <button type='submit'>제출하기</button>
    </form>
  )
}
