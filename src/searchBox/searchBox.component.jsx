import './searchBox.style.css'

const SearchBox = ({searchFilter}) => {
    <input
    className='search'
    type='SearchBox'
    placeholder='search monsters'
    handleChange={searchFilter}
    />
}

export default SearchBox;