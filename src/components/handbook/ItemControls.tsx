import classes from "./HandBook.module.scss"
import { Space } from "antd"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../hooks.ts"
import { setEditPizza } from "../../store/EditPizza.slice.ts"
import { deletePizzaFromPizzaList } from "../../store/PizzasList.slice.ts"
import { Item } from "../interfaces.ts"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import ModalConfirmation from "../common/modal-confirmation/ModalConfirmation.tsx"
import { useState } from "react"

interface PropType {
  item: Item
}

export default function ItemControls({ item }: PropType) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleEdit = (item: Item) => {
    dispatch(setEditPizza(item))
    navigate("/edit-item")
  }

  const handleDelete = (itemName: string) => {
    dispatch(deletePizzaFromPizzaList(itemName))
  }

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Space size="middle">
        <EditOutlined
          className={classes.icon}
          onClick={() => handleEdit(item)}
        />
        <DeleteOutlined
          className={classes.icon}
          onClick={() => setModalOpen(true)}
        />
      </Space>

      <ModalConfirmation
        open={modalOpen}
        title="Are you sure?"
        message={`Delete ${item.name}?`}
        onCancel={() => setModalOpen(false)}
        onOk={() => handleDelete(item.name)}
      />
    </>
  )
}
