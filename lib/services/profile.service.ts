'use server';

interface ProfileProps {
  email: string;
  password: string;
  name: string;
  profileImage: any;
}

export async function UpdateProfile(userdata: ProfileProps) {
  try {
    const res = await fetch(process.env.BASE_URL! + '/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userdata),
    });

    const data = await res.json();
    console.log('Profile Service:', data);

    if (res.ok) {
      return {
        success: true,
        data,
        message: 'Profile updated successfully',
      };
    } else {
      return {
        success: false,
        error: data?.message || 'Failed to update profile',
      };
    }
  } catch (error) {
    console.error('UpdateProfile Error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}
