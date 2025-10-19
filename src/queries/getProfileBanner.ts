// queries/getProfileBanner.ts
import datoCMSClient from './datoCMSClient';
import { ProfileBanner } from '../types';

const GET_PROFILE_BANNER = `
{
  profileBanner {
    headline
    resumeLink
    linkedinLink
    profileSummary
  }
}
`;

export async function getProfileBanner(): Promise<ProfileBanner> {
  try {
    const data = await datoCMSClient.request<{ profileBanner: ProfileBanner }>(GET_PROFILE_BANNER);
    console.log("🚀 ~ getProfileBanner ~ data:", data);
    return data.profileBanner;
  } catch (err: any) {
    if (err.response?.errors) {
      console.error("DatoCMS Error Details:", err.response.errors);
    }
    console.error("Error fetching profile banner:", err);
    throw err;
  }
}
