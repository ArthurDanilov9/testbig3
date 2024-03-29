import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPlayer, IPlayers } from '../../api/dto/IPlayers';
import { RootState } from '../../configs/redux/store';
import { IInitial } from '../../common/interfaces/IInitial';
import { get, post } from '../../api/baseRequest';

export const getPlayers = createAsyncThunk<IInitial<IPlayer[]>, IPlayers, { state: RootState }>(
  'getplayers',
  async (params, { rejectWithValue }) => {
    try {
      const res = await get(
        `/Player/GetPlayers?Name=${params.name}&Page=${params.page}&PageSize=${
          params.pageSize
        }${params.teamIds.map((id) => '&TeamIds=' + id).join('')}`,
      );
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addPlayer = createAsyncThunk<IPlayer, Omit<IPlayer, 'id'>, { state: RootState }>(
  'addplayer',
  async (body, { rejectWithValue }) => {
    try {
      const res = await post(`/Player/Add`, JSON.stringify(body));
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
