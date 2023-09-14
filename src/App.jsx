import "./App.css";
import { Box, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TourDetails from "./pages/TourDetails";
import NoMatch from "./components/NoMatch";
import Tours from "./pages/Tours";
import { addDays } from "date-fns";
import FavoriteTours from "./pages/FavoriteTours";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";
import AppLayout from "./components/AppLayout";
import AdminTours from "./pages/AdminTours";
import AdminHotels from "./pages/AdminHotels";
import AdminUsers from "./pages/AdminUsers";
import Bookings from "./pages/Bookings";
import ProtectedRoute from "./components/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";

const months = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avqust",
  "sentyabr",
  "oktyabr",
  "noyabr",
  "dekabr",
];
const typeOfTours = [
  "8 Mart",
  "Ailəvi turlar",
  "Bal ayı turları",
  "Ekstrim turları",
  "Erkən rezervasiya turları",
  "Gənclər üçün turlar",
  "Halal turlar",
  "Konsertlər ",
  "Kruiz turları",
  "Lüks turlar",
  "Müalicəvi turlar",
  "Novruz turları",
  "Qrup turları",
  "Ramazan turları",
  "Serial turları",
  "Sevgililər günü",
  "Səyahət turları",
  "Viza tələb olunmayan turlar",
  "Xaricilər üçün ekskursiyalar",
  "Yay turları",
  "Yeni il turları",
  "Çimərlik turları",
  "Əyləncəli turlar",
];

// BUNU SADƏCƏ TEST ÜÇÜN YAZIRAM XIRDA BİR DƏYİŞİKLİK BELƏ OLSA GİTHUB EXTENTİON BUNU FAYLDA DƏYİŞİKLİK OLMUŞ KİMİ
// QƏBUL EDİR. SAVE EDİRƏM VƏ..
// İNDİ COMMİT EDİB PUSH EDƏCƏM

function App() {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Box backgroundColor={theme.palette.primary.body}>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={<Home months={months} typeOfTours={typeOfTours} />}
          />
          <Route
            path="/turlar"
            element={<Tours months={months} typeOfTours={typeOfTours} />}
          />
          <Route path="/turlar/:tourId" element={<TourDetails />} />
          <Route path="/otellər" element={<Hotels />} />
          <Route path="/otellər/:hotelId" element={<HotelDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Profile />} />
          <Route path="/seçdiklərim" element={<FavoriteTours />} />

          <Route
            path="/admin-panel"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="bookings" element={<Bookings />} />
            <Route path="admin-tours" element={<AdminTours />} />
            <Route path="admin-hotels" element={<AdminHotels />} />
            <Route path="admin-users" element={<AdminUsers />} />
          </Route>

          <Route path="*" element={<NoMatch />} />
        </Routes>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 1500,
            },
            error: {
              duration: 3000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "black",
            },
          }}
        />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
