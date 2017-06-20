const ActionType =
{
               SHOW_DIALOG: 'ACTION_TYPE_SHOW_DIALOG',
               HIDE_DIALOG: 'ACTION_TYPE_HIDE_DIALOG',

                 INSERT_ROW: 'ACTION_TYPE_INSERT_ROW',
              INSERT_COLUMN: 'ACTION_TYPE_INSERT_COLUMN',
                 DELETE_ROW: 'ACTION_TYPE_DELETE_ROW',
              DELETE_COLUMN: 'ACTION_TYPE_DELETE_COLUMN',
                 SELECT_ROW: 'ACTION_TYPE_SELECT_ROW',
               DESELECT_ROW: 'ACTION_TYPE_DESELECT_ROW',
                UPDATE_ROWS: 'ACTION_TYPE_UPDATE_ROWS',

   // Asynchronous Action Types
      GET_RESOURCE_REQUEST: 'ACTION_TYPE_GET_RESOURCE_REQUEST',
      GET_RESOURCE_SUCCESS: 'ACTION_TYPE_GET_RESOURCE_SUCCESS',
        GET_RESOURCE_ERROR: 'ACTION_TYPE_GET_RESOURCE_ERROR',

         WRITE_FILE_REQUEST: 'ACTION_TYPE_WRITE_FILE_REQUEST',
         WRITE_FILE_SUCCESS: 'ACTION_TYPE_WRITE_FILE_SUCCESS',
           WRITE_FILE_ERROR: 'ACTION_TYPE_WRITE_FILE_ERROR',

          READ_FILE_REQUEST: 'ACTION_TYPE_READ_FILE_REQUEST',
          READ_FILE_SUCCESS: 'ACTION_TYPE_READ_FILE_SUCCESS',
            READ_FILE_ERROR: 'ACTION_TYPE_READ_FILE_ERROR'
}

export default ActionType
