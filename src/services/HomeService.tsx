
import { EndPoints } from "../components/api/endPoints";
import { TBanner,TItemsCollection, TResCollections,TShortcut } from "../../declaration";
export async function getBanners() {
  try {
      const res = await fetch(`${process.env.BASE_URL}${EndPoints.mainBannerAll}`);
      const response = await res.json() as TBanner;
      return response;
  } catch (error) {
      return error;
  }
}

export async function getHotDeals() {
  try {
      const res = await fetch(`${process.env.BASE_URL}${EndPoints.collections}`);
      const response = await res.json() as TResCollections;
      const filtered = response.items.filter(
				(o) => o.type === 'SINGLE' && o.viewType === 'TILE'
			) as TItemsCollection[];
      return response;
  } catch (error) {
      return error;
  }
}

export async function getShortcuts() {
  try {
      const res = await fetch(`${process.env.BASE_URL}${EndPoints.mainShortCutAll}`);
      const response = await res.json() as TShortcut[];
      return response;
  } catch (error) {
      return error;
  }
}


