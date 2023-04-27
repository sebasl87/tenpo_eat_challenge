import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAddress = createAsyncThunk('google/fetchAddress', async () => {
    console.log("first")
    const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=-34.6971623122228,-58.502765247034986&key=AIzaSyANfDbCIjSA6Jd3TnUJdGvmB-GNeFlU4pY');
    return (await response.json()).data;
});

