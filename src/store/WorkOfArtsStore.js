import create from 'zustand';
import axios from 'axios';
import { API_BASE_URL, api_key } from '../utils/apiConfig';

const WorkOfArtsStore = create((set) => ({

	artDatas: {
		material: '', // 그림인지 도자기인지
		artistName: '', // 화가 이름
		artTitle: '', // 그림 이름
		productDate: '', // 만든 년도
		measuer: '', // 작품 크기
		description: '', // 작품 설명
		place: '', // 작품이 만들어진 장소
		image: '', // 이미지 url
		birthDate: '', // 작가의 탄생일
		deathDate: '' // 작가의 사망일
	},
	loading: false,
	error: null,


	fetchArtInfo: async (objId) => {
		set({loading: true})

		try{
			const response = await axios.get(`${API_BASE_URL}collection/${objId}?key=${api_key}`);

		} catch (error){
			set({
				error: error.message,
				loading: false,
			})
		}

	} 

})); 