import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, put, remove } from '../../api/baseRequest';
import { ICustomError } from '../../common/interfaces/ICustomError';
import { IPlayer } from '../players/interfaces/IPlayers';

export const getPlayer = createAsyncThunk<IPlayer, number, { rejectValue: ICustomError }>(
  'getplayer',
  async (id, { rejectWithValue }) => {
    try {
      const res = await get(`/Player/ыGet?id=${id}`);
      return res;
    } catch (error) {
      return rejectWithValue(error as ICustomError);
    }
  },
);

export const deletePlayer = createAsyncThunk<IPlayer, number, { rejectValue: ICustomError }>(
  'delete',
  async (id, { rejectWithValue }) => {
    try {
      const res = await remove(`/Player/Delete?id=${id}`);
      return res;
    } catch (error) {
      return rejectWithValue(error as ICustomError);
    }
  },
);

export const updatePlayer = createAsyncThunk<
  IPlayer,
  Omit<Omit<IPlayer, 'isLoading'>, 'error'>,
  { rejectValue: ICustomError }
>('updateplayer', async (body, { rejectWithValue }) => {
  try {
    const res = await put(`/Player/Update`, JSON.stringify(body));
    return res;
  } catch (error) {
    return rejectWithValue(error as ICustomError);
  }
});
