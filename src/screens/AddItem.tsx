import React, { useState } from "react"
import { addItem } from "../api/api"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"

export default function AddItem() {
  const [name, setName] = useState<string>("")
  const [ImageURL, setImageURL] = useState<string>("")
  const [Location, setLocation] = useState<string>("")
  const [alert, setAlert] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

  const add = async () => {
    try {
      await addItem(name, ImageURL, Location)
      setAlert({ type: "success", message: "Item successfully added!" })
      setName("")
      setImageURL("")
      setLocation("")
    } catch (error) {
      setAlert({ type: "error", message: "Failed to add the item." })
    }
  }

  return (
    <Box
      component="form"
      display="flex"
      my={2}
      sx={{
        "& .MuiTextField-root": { mx: 1, width: "25ch", height: 100 },
      }}
      justifyContent="center"
      noValidate
      autoComplete="off"
    >
      {alert && <Alert severity={alert.type}>{alert.message}</Alert>}
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Alert severity="info">Add a new item to database</Alert>
        <div>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Image url"
            variant="outlined"
            onChange={(e) => setImageURL(e.target.value)}
            value={ImageURL}
            required
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            onChange={(e) => setLocation(e.target.value)}
            required
            value={Location}
          />
        </div>
        <div className="my-2">
          <Button variant="contained" color="success" onClick={() => add()}>
            Add Item
          </Button>
        </div>
      </Stack>
    </Box>
  )
}
