import React          from 'react'
import { connect }    from 'react-redux'
import ReactDataGrid  from 'react-data-grid'

import config         from '../../Config'

import { insertRow, insertColumn, updateRows } from '../../action/DataEditorAction'
import { refreshResource } from '../../action/AsynchronousAction'

class DataEditor extends React.Component {
  constructor (props) {
    super (props)

    const that = this
    this.tools =
    [
      {
           icon: `${config.routes.icons}/insert-row.png`,
        tooltip: 'Insert Row',
        onClick: (dispatch) => {
          const action = insertRow(that.props.rows)

          dispatch(action)
        }
      },
      {
           icon: `${config.routes.icons}/insert-column.png`,
        tooltip: 'Insert Column',
        onClick: (dispatch) => {
          const action = insertColumn(that.props.columns)

          dispatch(action)
        }
      },
      {
           icon: `${config.routes.icons}/delete-row.png`,
        tooltip: 'Delete Row',
        onClick: (dispatch) => {

        }
      },
      {
           icon: `${config.routes.icons}/delete-column.png`,
        tooltip: 'Delete Column',
        onClick: (dispatch) => {

        }
      },
      {
           icon: `${config.routes.icons}/reload.png`,
        tooltip: 'Refresh',
        onClick: refreshResource
      }
    ]
  }

  render ( ) {
    const that = this
    return (
      <div className="wrapper">
        <div className="panel panel-default no-background no-border no-shadow">
          <div className="panel-body">
            <div className="text-right">
              {
                this.tools.map((tool, index) => {
                  const tooltip = tool.tooltip
                  const ttattrs = tooltip ?
                    {
                         "data-toggle": "tooltip",
                      "data-placement": "top",
                                 title: tooltip
                    } : { }

                  return (
                    <button key={index} className="btn no-background no-border no-shadow"
                      {...ttattrs} onClick={() => { that.props.dispatch(tool.onClick) }}>
                      <img width="20" src={tool.icon}/>
                    </button>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div>
          <ReactDataGrid
             enableCellSelect={true}
                      columns={this.props.columns}
                    rowGetter={(index) => { return that.props.rows[index] }}
                    rowsCount={this.props.rows.length}
              enableRowSelect={true}
            onGridRowsUpdated={({ fromRow, toRow, updated }) => {
              that.props.dispatch((dispatch) => {
                const action  = updateRows(fromRow, toRow, updated)

                dispatch(action)

                that.props.onChangeData({
                  columns: that.props.columns,
                     rows: that.props.rows
                })
              })
            }}/>
        </div>{/* a hack which doesn't work, what's the harm anyway? */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const dataEditor    = state.dataEditor

  return {
       rows: dataEditor.rows,
    columns: dataEditor.columns
  }
}

export default connect(mapStateToProps)(DataEditor)
